import css from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={css.footer}>
  <div className={css.content}>
    <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
    <div className={css.wrap}>
      <p>Yatsenko Oleh</p>
      <p>
        Contact us:
        <Link href="mailto:yatsenko.prog@gmail.com">yatsenko.prog@gmail.com</Link>
      </p>
    </div>
  </div>
</footer>

    )
}