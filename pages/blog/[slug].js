import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useRouter } from "next/router";

export default function PostPage({
  frontmatter: {
    title,
    category,
    pvm,
    cover_image,
    description,
    author,
    author_image,
    cover_alt,
  },
  content,
  slug,
}) {
  const router = useRouter();
  const pathName = router.asPath;
  return (
    <Layout title={title} description={description}>
      <div className="md:w-3/4 px-10 py-6 bg-white rounded-lg shadow-md mt-6 mx-auto ">
        <Link href="/blog">Takaisin</Link>
        <div className="md:flex justify-between items-center mt-4  sm:flex-row ">
          <h1 className="text-5xl mb-7">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt={cover_alt} className="md:w-3/4 rounded" />
        <div className="flex justify-between items-center bg-gray-100 p-2 my-8 md:w-3/4">
          {author} {"| " + pvm}
          <div className="mr-1  mx-auto">
            <div className="flex justify-between">
              <FacebookShareButton
                url={"http://www.topkymppi.com" + pathName}
                quote={title}
                hashtag="topkymppi"
              >
                <FacebookIcon className="mr-2" size={36} borderRadius={20} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={"http://www.topkymppi.com" + pathName}
                quote={title}
                separator=" "
              >
                <WhatsappIcon className="mr-2" size={36} borderRadius={20} />
              </WhatsappShareButton>
              <TwitterShareButton
                url={"http://www.topkymppi.com" + pathName}
                title={title}
                hashtags={["topkymppi"]}
              >
                <TwitterIcon className="mr-2" size={36} borderRadius={20} />
              </TwitterShareButton>
            </div>
          </div>
        </div>
        <div className="flex justify-around lg:w-3/4">
          <a href="https://track.adtraction.com/t/t?a=1269311372&as=1686845173&t=2&tk=1">
            <img
              src="/images/marketing/hintaopas.png"
              width={400}
              height={200}
            />
          </a>
        </div>
        <div className="blog-text mt-2 lg:w-3/4">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
