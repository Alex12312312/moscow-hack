const withGQL = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
                )
            }

            const {dir} = options

            // noinspection ES6ShorthandObjectProperty,JSValidateTypes,JSCheckFunctionSignatures
            config.module.rules.push({
                test: /\.(graphql|gql)$/,
                include: [dir],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'graphql-tag/loader'
                    }
                ]
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        }
    })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i06.fotocdn.net',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'images.adsttc.com',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'avatars.mds.yandex.net',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'bigtrip.by',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 's3.timeweb.cloud',
                port: ''
            }
        ],
    },
}

export default withGQL(nextConfig)
