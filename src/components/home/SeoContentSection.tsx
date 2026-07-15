"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SeoContentSection() {
  return (
    <section className="px-4 py-8 md:px-8 bg-[#faf5ff] font-sans border-t border-b border-[#f3e8ff]/50 flex justify-center">
      <div className="max-w-[1200px] w-full">

        {/* Scrollable SEO Content Box */}
        <motion.div
          className="bg-white rounded-2xl border border-purple-100 shadow-[0_10px_30px_rgba(107,33,168,0.02)] p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="h-[400px] overflow-y-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-gray-700 space-y-6 text-[0.98rem] leading-relaxed">
           
           <h2 className="text-2xl md:text-[1.8rem] font-extrabold text-[#1e1b4b] m-0 mb-2">
              Assignment Help UK{" "}
            You Can Actually Trust
          </h2>
          <p className="text-[0.95rem] text-gray-500 m-0 font-medium">
            Human-written coursework, essays, and reports tailored to UK
            university standards.
          </p>
           
            <p>
              Struggling with a deadline, a confusing brief, or a subject you
              just can't get your head around?
              <strong> AssignmentInNeed (AIN)</strong> offers assignment help UK
              students rely on when things get tight. Whether you need an
              assignment helper for a single tricky chapter or full help with
              assignments online from start to finish, our UK-based writers work
              directly with your module requirements—no generic templates, no
              copy-paste answers.
            </p>

            <p>
              We built AIN around one idea: help with assignments should mean
              real subject knowledge, real referencing accuracy, and real
              deadlines met—not a rushed, AI-generated draft with your name on
              it.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#1e1b4b] mt-8 mb-3">
              Why Students Choose AIN for Assignment Help Online
            </h3>
            <ul className="list-disc pl-5 space-y-2.5">
              <li>
                <strong>Subject-matched writers:</strong> Every assignment
                helper on our team is matched to your course level and
                subject—not a generalist writing outside their field.
              </li>
              <li>
                <strong>100% human-written work:</strong> No AI-generated
                content. Every piece is checked against AI-detection tools
                before it reaches you, so what you submit reads like your own
                understanding, properly written.
              </li>
              <li>
                <strong>Referencing done right:</strong> Harvard, APA, OSCOLA,
                MLA, whatever your university demands, formatted correctly, not
                guessed at.
              </li>
              <li>
                <strong>UK academic standards:</strong> We write to UK marking
                criteria, not a generic international template repackaged for
                the UK market.
              </li>
              <li>
                <strong>On-time, every time:</strong> Deadlines are
                non-negotiable in academic work. We treat them the same way.
              </li>
              <li>
                <strong>Direct communication:</strong> You can talk to your
                assigned writer throughout the process—not a support ticket that
                goes nowhere.
              </li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#1e1b4b] mt-8 mb-3">
              Assignment Writing Help, Structured Around You
            </h3>
            <p>
              Whether you're looking for assignment services for a single essay
              or ongoing assignment assistance online across a full term, our
              process stays the same:
            </p>
            <ol className="list-decimal pl-5 space-y-2.5">
              <li>
                <strong>Tell us what you need:</strong> Share your brief, word
                count, and deadline.
              </li>
              <li>
                <strong>We match you with a writer:</strong> Based on subject,
                level, and referencing style.
              </li>
              <li>
                <strong>You review and request changes:</strong> Nothing goes
                final until you're satisfied.
              </li>
              <li>
                <strong>You submit with confidence:</strong> Properly
                referenced, plagiarism-checked, and human-written.
              </li>
            </ol>
            <p className="italic text-gray-500">
              This isn't a black box. You know who's working on your assignment
              and why they were picked.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#1e1b4b] mt-8 mb-3">
              Best Assignment Help Across Every Subject
            </h3>
            <p>
              From business and law to nursing, computer science, and the
              humanities, our assignment help services cover undergraduate and
              postgraduate work across UK universities. If you need help on
              assignments in a subject that isn't listed here, ask—we'll tell
              you honestly if we have the right expertise before you commit, not
              after.
            </p>
            <p>
              We don't stretch writers across subjects they're unfamiliar with
              just to say yes to every request. If a topic falls outside what we
              can genuinely support well, we'll tell you upfront rather than
              delivering weak work and hoping you don't notice. That's a
              deliberate trade-off—we'd rather turn down a request than damage
              the trust that makes people come back for assignment help online
              again.
            </p>
            <p>
              For students juggling multiple modules, this also means
              consistency. You're not getting a different quality standard
              depending on which writer happens to be free. Whether it's a
              single essay or ongoing assignment services across a term, the
              same subject-matching process applies every time.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#1e1b4b] mt-8 mb-3">
              An Honest Note on Academic Integrity
            </h3>
            <p>
              We're not going to pretend this is a grey area. Assignment help
              exists to support your understanding—model answers, structural
              guidance, and properly researched drafts you can learn from and
              build on. What you submit and how you use what we provide is your
              responsibility under your university's academic integrity policy.
              We'd rather say that plainly than dodge it in a footnote.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#1e1b4b] mt-8 mb-3">
              Assignment Helper UK: Who Actually Writes Your Work
            </h3>
            <p>
              A lot of assignment help services in the UK outsource to whoever
              is available that day. We don't work that way. When you come to
              AIN for assignment writing help, you get a writer who has actually
              studied and worked in your subject area—not a generalist assigned
              based on availability.
            </p>
            <p>
              This matters more than most students realise. An assignment helper
              who understands your subject can catch gaps in your brief, flag
              where your argument is weak, and structure the work the way your
              marker expects it—not just fill word count. That's the difference
              between assignment assistance that gets you a pass and assignment
              assistance online that gets you a strong grade.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#1e1b4b] mt-8 mb-3">
              Assignment Help Services Built for Real UK Deadlines
            </h3>
            <p>
              Every UK university has its own deadline culture, referencing
              rules, and marking style. Generic assignment help services that
              serve a global market don't account for this. AIN does.
            </p>
            <p>
              When you ask for help with assignments UK-based, you're getting:
            </p>
            <ul className="list-disc pl-5 space-y-2.5">
              <li>
                Writers trained on UK grading rubrics, not adapted from a
                different education system
              </li>
              <li>
                Referencing formatted exactly to your university's required
                style
              </li>
              <li>Deadlines treated as fixed, not flexible</li>
              <li>
                A process where you can ask questions and request changes before
                you submit anything
              </li>
            </ul>
            <p>
              This is assignment help online the way it should work—transparent,
              subject-matched, and built around your actual course, not a
              one-size-fits-all template.
            </p>
            <p className="font-semibold text-[#1e1b4b]">
              Need help with an assignment today? Get in touch and tell us your
              deadline, subject, and requirements—we'll match you with the right
              assignment helper and give you a straight answer on turnaround
              before you commit to anything.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
