import {createSchema, createYoga, YogaInitialContext, YogaServerOptions} from 'graphql-yoga'
import axios, {AxiosError, AxiosResponse} from "axios";
import fp from "lodash/fp";

import typeDefs from '@/app/lib/apollo/schemas/schemas.gql'
import {GraphQLFloat, GraphQLInt} from "graphql";
import * as https from "https";
import {NextApiRequest, NextApiResponse} from "next";
import {IExecutableSchemaDefinition} from "@graphql-tools/schema";

const baseParams = (pGetter: any, other: any) => ({
    baseURL: process.env.BASE_API_URL,
    headers: {
        'Authorization': `Bearer ${pGetter('2.req.cookies.access_token')}`,
        'Origin': process.env.BASE_API_URL
    },
    httpsAgent,
    ...other,
})

const fillParams = (route: string, params: Record<string, string>) => {
    Object.keys(params).forEach((key) => {
        route = route.replace(`:${key}`, params[key])
    })

    return route
}

const httpsAgent = new https.Agent({rejectUnauthorized: false});

const baseErrorResolver = async (error: AxiosError) => {
    if (error.response) {
        console.log(error.response.status)
        switch (error.response.status) {
            case 401:
                return {
                    StatusCode: 401,
                    Error: "Обновите токен"
                }
            case 405:
                console.log(error.response.request.method)
                return {
                    StatusCode: 405,
                    Error: "В схеме используется неправильный http-метод"
                }
            case 415:
                return {
                    StatusCode: 415,
                    Error: "Похоже нет body, из-за этого yoga-graphql использует ContentType text/plain"
                }
            case 400:
                return {
                    StatusCode: 404,
                    Error: "Ресурс не найден"
                }
            case 500:
                return {
                    StatusCode: 500,
                    Error: `Произошла непредвиденная ошибка: ${error.response.data}`
                }
            default:
                return {
                    StatusCode: error.response?.status,
                    ...error.response.data!
                }
        }
    }
    console.log(error)
    return {
        StatusCode: 500,
        Error: "unexpected error on front"
    }
}

const baseOkResolver = async (response: AxiosResponse) => {
    return {
        StatusCode: 200,
        Response: response.data
    }
}

const resolvers = {
    Query: {
        get: async (...params: any) => {
            const pGetter = (path: string) => fp.getOr('', path, params)
            return await axios.get(
                fillParams(pGetter('1.route'), pGetter('1.qs')),
                baseParams(pGetter, {params: pGetter('1.qs')}))
                .then(response => baseOkResolver(response))
                .catch(error => baseErrorResolver(error))
        }
    },
    Mutation: {
        post: async (...params: Record<string, string>[]) => {
            const pGetter = (path: string) => fp.getOr('', path, params)

            return await axios.post(
                fillParams(pGetter('1.route'), pGetter('1.qs')), pGetter('1.body'),
                baseParams(pGetter, {params: pGetter('1.qs')}))
                .then(response => baseOkResolver(response))
                .catch(error => baseErrorResolver(error))
        },
        postSlice: async (...params: Record<string, string>[]) => {
            const pGetter = (path: string) => fp.getOr('', path, params)

            return await axios.post(
                fillParams(pGetter('1.route'), pGetter('1.qs')), pGetter('1.body'),
                baseParams(pGetter, {params: pGetter('1.qs')}))
                .then(response => baseOkResolver(response))
                .catch(error => baseErrorResolver(error))
        },
        put: async (...params: Record<string, string>[]) => {
            const pGetter = (path: string) => fp.getOr('', path, params)

            return await axios.put(
                fillParams(pGetter('1.route'), pGetter('1.qs')), pGetter('1.body'),
                baseParams(pGetter, {params: pGetter('1.qs')}))
                .then(response => baseOkResolver(response))
                .catch(error => baseErrorResolver(error))
        },
        patch: async (...params: Record<string, string>[]) => {
            const pGetter = (path: string) => fp.getOr('', path, params)

            return await axios.patch(
                fillParams(pGetter('1.route'), pGetter('1.qs')), pGetter('1.body'),
                baseParams(pGetter, {params: pGetter('1.qs')}))
                .then(response => baseOkResolver(response))
                .catch(error => baseErrorResolver(error))
        },
        delete: async (...params: Record<string, string>[]) => {
            const pGetter = (path: string) => fp.getOr('', path, params)

            return await axios.delete(
                fillParams(pGetter('1.route'), pGetter('1.qs')),
                baseParams(pGetter, {params: pGetter('1.qs')}))
                .then(response => baseOkResolver(response))
                .catch(error => baseErrorResolver(error))
        }
    },
    Types: {
        Int: GraphQLInt,
        Float: GraphQLFloat,
    }
}

// todo: переписать на IBM PC для Санечки ;)
const schemaDeclare = <IExecutableSchemaDefinition<YogaInitialContext>>{
    typeDefs,
    resolvers,
}

const schema = createSchema(schemaDeclare)

// export const/ config = {
//     api: {
//         bodyParser: false,
//     },
// }
const {handleRequest} = createYoga<YogaServerOptions<NextApiRequest, NextApiResponse>>({
    schema,
    graphqlEndpoint: 'api/gql',
});

export {handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS}