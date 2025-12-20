import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

import AddProjectForm from "../components/AddProjectForm";
import AddClientForm from "../components/AddClientForm";
import ContactsList from "../components/ContactsList";
import SubscribersList from "../components/SubscribersList";
import { Dot, Home } from "lucide-react";

export default function Admin() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-indigo-600">ShowcaseHub</h1>

        {/* Home Icon */}
        <Link
          to="/"
          className="p-2 rounded-full hover:bg-indigo-50 transition"
          title="Go to Home"
        >
          <Home className="w-6 h-6 text-indigo-600" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white rounded-xl shadow p-5 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Overview</h2>
            <p className="text-sm text-gray-600 mt-1">
              Manage all content and user data from this panel.
            </p>
          </div>

          <div className="space-y-3">
            <OverviewItem label="Projects" />
            <OverviewItem label="Clients" />
            <OverviewItem label="Contact Queries" />
            <OverviewItem label="Subscribers" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-4 bg-white rounded-xl shadow p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-indigo-600">Admin Panel</h1>
          </div>

          <Tabs defaultValue="projects">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-6 bg-slate-100">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
            </TabsList>

            <TabsContent value="projects">
              <Section title="Add Project">
                <AddProjectForm />
              </Section>
            </TabsContent>

            <TabsContent value="clients">
              <Section title="Add Client">
                <AddClientForm />
              </Section>
            </TabsContent>

            <TabsContent value="contacts">
              <Section title="Contact Queries">
                <ContactsList />
              </Section>
            </TabsContent>

            <TabsContent value="subscribers">
              <Section title="Newsletter Subscribers">
                <SubscribersList />
              </Section>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="bg-slate-50 rounded-lg p-4">{children}</div>
    </div>
  );
}

function OverviewItem({ label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <Dot className="text-indigo-600" />
      {label}
    </div>
  );
}
