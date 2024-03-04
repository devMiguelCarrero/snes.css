import AuthorImage from '@/shared/assets/img/author-image.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="main-container">
      <div className="snes-container has-secondary-purple-bg">
        <h1 className="snes-container-title has-plumber-underline">
          About the author
        </h1>
        <div className="md:flex flex-row gap-5 items-center">
          <div className="flex-[0.3]">
            <Image
              className="snes-image"
              alt="devMiguelCarrero"
              src={AuthorImage}
              width={260}
            />
          </div>
          <div className="flex-[0.7]">
            <p>
              I'm Miguel Carrero, a Frontend Developer and CSS lover living in
              Colombia with a passion for game development. My love for video
              games deeply influences my work, guiding me to create web designs
              that are both aesthetic and functional, standing out while being
              user-friendly.
            </p>
          </div>
        </div>
        <p>
          My goal is to make life easier for users and fellow programmers,
          focusing on innovation and practicality in every project. I'm
          committed to making a difference in the digital world through
          thoughtful design and functionality.
        </p>
        <p>
          If you like works like this one, please consider to follow me in my
          networks:
        </p>
        <ul className="snes-list is-phantom-list-color">
          <li>
            <Link
              className="snes-link has-ember-underline"
              href="https://github.com/devMiguelCarrero"
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              className="snes-link has-ocean-underline"
              href="https://twitter.com/devmikecarrero"
              target="_blank"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              className="snes-link has-turquoise-underline"
              href="https://www.linkedin.com/in/miguel-angel-carrero/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              className="snes-link has-phantom-underline"
              href="https://codepen.io/devMiguelCarrero"
              target="_blank"
            >
              Codepen
            </Link>
          </li>
        </ul>
      </div>
      <div className="snes-container has-aged-yellow-bg">
        <h3 className="snes-container-title has-phantom-underline">
          Why i made SNES.CSS
        </h3>
        <p>
          I was deeply influenced by B.C.Rikko's framework NES.CSS and his 8bit
          looking appearace. Since i saw it, i was wondering if i can make
          funcional components that can have the style of the 16bit consoles
          with all the characteristic shadows and lights of the 90's pixel art
          games and bring to the users and developers something that gives a
          nostalgic sensation combined with a easy to use methodology.
        </p>
      </div>
    </main>
  );
}
