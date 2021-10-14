export function getPagination(req) {
    const { q, limit, skip } = req.query

    return {
        q,
        limit: parseInt(limit || 6),
        skip: parseInt(skip || 0),
    }
}