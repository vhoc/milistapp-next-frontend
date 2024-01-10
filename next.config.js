/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'api.milist.app',
            },
            {
                protocol: "https",
                hostname: 'mrgazjmksfzheungnvqd.supabase.co',
            }
        ]
    }
}

module.exports = nextConfig
