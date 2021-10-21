export function getPagination(req) {
    const { q, limit, skip, orderBy, order } = req.query

    return {
        q,
        orderBy,
        order,
        limit: parseInt(limit || 6),
        skip: parseInt(skip || 0),
    }
}

export function getUserId(req) {
    return req.user ? req.user.userId : undefined
}