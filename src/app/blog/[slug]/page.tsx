import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, SUBJECTS } from "@/lib/data";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface Props {
  params: { slug: string };
}

const findPostBySlug = (slug: string) => {
  return BLOG_POSTS.find((p) => p.href.endsWith(slug));
};

export default function BlogDetailPage({ params }: Props) {
  const { slug } = params;
  const post = findPostBySlug(slug);

  if (!post) {
    return (
      <SectionContainer>
        <div className="py-20 text-center">Post not found.</div>
      </SectionContainer>
    );
  }

  const contentHtml = `<p>${post.excerpt}</p><p>${post.excerpt} ${post.excerpt}</p><p>For the full article please refer to the original blog source or contact our team for more guides.</p>`;

  return (
    <div className="bg-white">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
          <main className="lg:col-span-8">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{post.title}</h1>
            <div className="text-sm text-text-muted mb-4">{post.date} • by Admin</div>
            <div className="w-full h-64 relative mb-6 rounded-xl overflow-hidden shadow-lg">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
            </div>

            <article className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
          </main>

          <aside className="lg:col-span-4">
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Link href="/order">
                  <Image src="/images/whatsapp-order-now.webp" alt="Order Now" width={600} height={400} className="object-cover w-full h-auto" />
                </Link>
              </div>

              <div className="rounded-xl bg-gray-50 p-5 shadow-sm">
                <h4 className="text-lg font-bold text-primary-700 mb-3">Our Popular Subjects</h4>
                <ul className="space-y-2">
                  {SUBJECTS.slice(0, 8).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/subjects/${s.slug}`} className="block rounded px-3 py-2 border border-primary-200 text-primary-700 hover:bg-primary-700 hover:text-white transition">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </SectionContainer>
    </div>
  );
}
