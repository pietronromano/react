# 88. Setup Proxy
References:
- https://www.udemy.com/course/modern-react-from-the-beginning/learn/lecture/51287125#overview


## To run in dev mode:
```bash
cd my-modern-react/my-lessons/10-context-api/88-setup-proxy/shopping-cart-ui
npm install
npm run dev
```

### Run JSON Server:
In a separate terminal, run:
```bash
cd my-modern-react/my-lessons/10-context-api/88-setup-proxy/shopping-cart-ui
npm run json-server 

curl http://localhost:8000/products
```

 
---
# Add a Proxy
[10-context-api-shopping-cart-project/06-add-a-proxy.md]
Right now, we are typing the full URL to the API, which includes the localhost and port. This will become an issue once we deploy the app. We will need to change the URL to the production URL. To avoid this, we can use a proxy.

Open the `vite.config.ts` file and add the following block:

```ts
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
```

Now in your API calls, you can use the `/api` prefix and it will be proxied to the API.

Now you can do the following:

```ts
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);
```

And any other requests you make to the API. This will make it easier to switch between development and production environments without having to change the code.
