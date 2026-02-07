export type APIState<T> =
    | { status: 'loading' }
    | { status: 'success', data: T }
    | { status: 'error', error: string }