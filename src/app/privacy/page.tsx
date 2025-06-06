import Breadcrumbs from "../../components/Breadcrumbs";

export default function Privacy() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Privacy Policy</h1>
      <p className="text-gray-700">Our privacy policy will be available soon. We are committed to protecting your information and privacy at all times.</p>
    </div>
  );
}
