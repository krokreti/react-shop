interface fetchError {
    error: {
        code: number,
        errors: string[],
        message: string
    }
}

export default fetchError;