/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    NHOST_BACKEND_URL: 'https://pczebmvrovjkvzfofmvz.hasura.eu-central-1.nhost.run',
  },
}

module.exports = nextConfig
