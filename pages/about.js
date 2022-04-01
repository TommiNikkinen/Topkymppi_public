import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout title="Topkymppi tiedot">
      <h1 className="text-5xl border-b-4 pb5 font-bold">Tiedot</h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">Topkymppi viihdesivusto</h3>
        <p className="mb-3">
          Topkymppi.com kokoaa yhteen paikkaan monipuolisia uutisia, vinkkejä ja
          top-listoja.
        </p>
        <p className="mb-3">
          Sivusto sisältää affiliate-linkkejä ja mainoksia.
        </p>
        <p className="mb-3">Yhteydenotot topkymppicontact@gmail.com</p>
        <p>
          <span className="font-bold">Versio 1.0</span>
        </p>
        <p>
          <span className="font-bold">Copyright &copy; Topkymppi 2022</span>
        </p>
      </div>
    </Layout>
  );
}
