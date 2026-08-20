import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SavedGuidesList from "@/components/account/SavedGuidesList";
import { createClient } from "@/lib/supabase/server";
import { getAllGuides } from "@/lib/guides";
import type { GuideFrontmatter } from "@/lib/guide-constants";

export const metadata: Metadata = {
  title: "My Library — NextGen Tools",
};

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/account");
  }

  const { data: savedRows } = await supabase
    .from("saved_guides")
    .select("industry, slug")
    .eq("user_id", user.id);

  const allGuides = getAllGuides();
  const savedGuides: GuideFrontmatter[] = (savedRows ?? [])
    .map((row) => {
      const guide = allGuides.find(
        (g) => g.industry === row.industry && g.slug === row.slug,
      );
      if (!guide) return null;
      const frontmatter: GuideFrontmatter = {
        title: guide.title,
        slug: guide.slug,
        industry: guide.industry,
        category: guide.category,
        tier: guide.tier,
        summary: guide.summary,
      };
      return frontmatter;
    })
    .filter((g): g is GuideFrontmatter => g !== null);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-deep">
            My Library
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-body-soft">
            Guides you&apos;ve saved for later.
          </p>

          <div className="mt-12">
            <SavedGuidesList initialGuides={savedGuides} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
