declare module '*.gql' {
    const content: any;
    export default content;
}

declare module '*.graphql' {
    const content: any;
    export default content;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png' {
    const content: string
    export default content;
}