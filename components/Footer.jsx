'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';

import {socials} from '@/constants';
import styles from '@/styles';
import { footerVariants } from '@/utils/motion';
import Image from 'next/image';

const Footer = () => (
  <motion.footer
    id="contact"
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-gradient">
          Connect with Us
          <p className="flex-1 mt-[16px] font-normal text-[18px] text-white leading-[32px]">
            Join us in our mission to revolutionize the biotherapeutics
            landscape
          </p>
        </h4>
        <Link href="mailto:info@zerus.life">
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#080a0e] rounded-[32px] gap-[12px]"
          >
            <Image
              src="favicon.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">CONTACT</span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-50" />
        <div className="zerus__footer-links">
          <div className="zerus__footer-links_div opacity-80">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="zerus__footer-links_div opacity-80">
            <h4> Business Development </h4>
            <p> 301, Gate District Building 04</p>
            <p> Dubai International Financial Centre</p>
            <p> Dubai, United Arab Emirates - 507278</p>
          </div>
          <div className="zerus__footer-links_div opacity-80">
            <h4>Research</h4>
            <p> DBT Center of Excellence for Biopharmaceutical Technology</p>
            <p> Indian Institute of Technology, Delhi</p>
            <p> Hauz Khas, New Delhi - 110016</p>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Image
            src="/logo.svg"
            alt="logo"
            className="w-[320px] h-[50px] object-fill align-middle"
          />
          <p className="font-normal text-[14px] text-white opacity-80">
            ©&nbsp; 2023&nbsp; Zerus&nbsp; Life&nbsp; Sciences,&nbsp; Ltd.&nbsp;
            All&nbsp; rights&nbsp; reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Image
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
