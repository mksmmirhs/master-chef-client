import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src="../src/assets/2153483.jpg" alt="" />
    </div>
  );
}
