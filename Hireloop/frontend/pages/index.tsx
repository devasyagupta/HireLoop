import Link from 'next/link';
import { getToken } from '../lib/apiClient';

export default function HomePage() {
  const token = getToken();
  return (
    <div className="min-h-screen gradient-bg text-slate-50">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/40">
            <span className="text-lg font-semibold">HL</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight">
              HireLoop
            </span>
            <span className="text-xs text-slate-300">
              AI Resume Optimization for ATS Systems
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-100">
          <Link href="/login" className="hover:text-white">
            Login
          </Link>
          

<Link
  href={token ? "/dashboard" : "/signup"}
  className="rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow"
>
  Get started free
</Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 pt-10 lg:flex-row lg:items-center lg:justify-between">
        <section className="max-w-xl space-y-6">
          <span className="badge">New • AI-powered resume tailoring</span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            AI Resume Optimization
            <span className="block text-brand-200">
              built for modern ATS systems.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/90 leading-relaxed">
            HireLoop analyzes your resume against any job description to
            generate a tailored resume, ATS score, and personalized cover
            letter. Designed for job seekers who want to stand out in the
            hiring loop.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/signup"
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand-500/40 hover:bg-brand-600"
            >
              Get started free
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-slate-100 hover:text-white"
            >
              I already have an account
            </Link>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
            <div className="card p-4">
              <p className="font-medium text-slate-50">Tailored Resumes</p>
              <p className="mt-1 text-xs text-slate-300">
                Optimize your resume for each job without starting from scratch.
              </p>
            </div>
            <div className="card p-4">
              <p className="font-medium text-slate-50">ATS Score</p>
              <p className="mt-1 text-xs text-slate-300">
                Understand how applicant tracking systems see your profile.
              </p>
            </div>
            <div className="card p-4">
              <p className="font-medium text-slate-50">Cover Letters</p>
              <p className="mt-1 text-xs text-slate-300">
                Generate polished, role-specific cover letters in seconds.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 w-full max-w-md lg:mt-0">
          <div className="card relative overflow-hidden p-6">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/10 via-cyan-500/5 to-emerald-500/10" />
            <div className="relative space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Inside HireLoop
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-50">
                      Upload resume & paste job description
                    </p>
                    <p className="text-xs text-slate-300">
                      Support for PDF and DOCX with automatic text extraction.
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Step 1
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-50">
                      Generate tailored resume & ATS score
                    </p>
                    <p className="text-xs text-slate-300">
                      AI aligns your experience with the role and surfaces
                      missing keywords.
                    </p>
                  </div>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    Step 2
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-50">
                      Export documents & track history
                    </p>
                    <p className="text-xs text-slate-300">
                      Download PDFs and revisit every tailored version you have
                      created.
                    </p>
                  </div>
                  <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
                    Step 3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

