import Card from "../components/Card"; 

export default function Home() {
  return (
    <div className="ml-20">
      <h1 className="text-2xl font-bold mb-6">Welcome to Home Page</h1>

    
      <div className="flex gap-6">
        <Card
          title="Inbound Inventory"
          description="Track items that are arriving at the warehouse."
          link="/inbound"
        />
        <Card
          title="Outbound Inventory"
          description="Monitor items that are leaving the warehouse."
          link="/outbound"
        />
      </div>
    </div>
  );
}
