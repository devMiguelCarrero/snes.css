import Link from 'next/link';

export default function DonatePage() {
  return (
    <main className="main-container">
      <div className="snes-container has-soft-green-bg">
        <h1 className="snes-container-title has-nature-underline">Donate</h1>
        <p>
          Your donation would greatly support my ongoing efforts to contribute
          valuable work to the internet. I would be deeply grateful for your
          support.
        </p>
        <p>Currently, I have the following means to accept donations:</p>
        <ul className="snes-list">
          <li>
            <Link
              className="snes-link has-plumber-underline"
              href="https://ko-fi.com/devmiguelcarrero"
              target="_blank"
            >
              Ko-Fi
            </Link>
          </li>
          <li>
            <Link
              className="snes-link has-ocean-underline"
              href="https://www.paypal.com/donate/?hosted_button_id=RKK3G3FWEAMLU"
              target="_blank"
            >
              PayPal
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export const generateMetadata = async () => {
  return {
    title: 'Donate',
    description:
      'Your donation would greatly support my ongoing efforts to contribute valuable work to the internet. I would be deeply grateful for your support',
  };
};
