/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'api.milist.app',
            }
        ]
    }
}

module.exports = nextConfig
