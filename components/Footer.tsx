import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark-alt">
      <div className="mx-auto max-w-[1440px] px-6 md:px-[96px]">
        {/* Main Footer */}
        <div className="py-16">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Logo & Description */}
            <div className="shrink-0 md:w-[400px]">
              <p className="text-[32px] md:text-[48px] font-medium text-primary-lime">
                Kodimo
              </p>
              <p className="mt-4 max-w-[356px] text-[12px] leading-[20px] text-text-primary">
                Combining AI with verified human experts to deliver
                accurate construction estimates that help you win more bids
              </p>
              <div className="mt-6 space-y-1 text-[12px] leading-[20px] text-text-primary">
                <p>Reach out to nj@kodimo.cc for further questions</p>
                {/* <p>1-800-555-1234</p> */}
                {/* <p>123 Construction Way</p> */}
                {/* <p>Miami, FL 33101</p> */}
              </div>
            </div>

            {/* Links - positioned to match Figma columns */}
            <div className="flex flex-1 gap-12 md:gap-[127px] md:ml-[42px]">
              {/* Follow us */}
              <div className="w-[136px]">
                <h4 className="text-[14px] font-bold leading-[1.217] text-primary-lime underline decoration-2 underline-offset-4">
                  Follow us
                </h4>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a href="#" className="text-[14px] font-normal leading-[1.217] text-primary-lime transition-colors hover:text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[14px] font-normal leading-[1.217] text-primary-lime transition-colors hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[14px] font-normal leading-[1.217] text-primary-lime transition-colors hover:text-white">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>

              {/* How it works */}
              <div className="w-[136px]">
                <h4 className="text-[14px] font-bold leading-[1.217] text-primary-lime underline decoration-2 underline-offset-4">
                  Sections
                </h4>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a href="#how-it-works" className="text-[14px] font-normal leading-[1.217] text-primary-lime transition-colors hover:text-white">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#secret-sauce" className="text-[14px] font-normal leading-[1.217] text-primary-lime transition-colors hover:text-white">
                      The Secret Sauce
                    </a>
                  </li>
                  <li>
                    <a href="#customers" className="text-[14px] font-normal leading-[1.217] text-primary-lime transition-colors hover:text-white">
                      Customers
                    </a>
                  </li>
                  <li>
                    <a href="#customers" className="text-[14px] font-normal leading-[1.217] text-primary-lime transition-colors hover:text-white">
                      Blog
                    </a>
                  </li>
                  
                </ul>
              </div>

              {/* Blog */}
              {/* <div className="w-[136px]">
                <h4 className="text-[14px] font-bold leading-[1.217] text-primary-lime">
                  Blog
                </h4>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/images/footer-logo.png"
                alt="Kodimo"
                width={40}
                height={38}
              />
            </div>
            <p className="text-right text-[16px] text-primary-lime">
              Copyright@2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
