import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/about');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Splash App</h1>
      <button
        onClick={handleNavigate}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go to About Page
      </button>
    </div>
  );
};

export default Home;
