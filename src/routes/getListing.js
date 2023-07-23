import Boom from '@hapi/boom';
import { db } from '../database';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { results } = await db.query(
            // Le ? permet d'empêcher les injections SQL
            'SELECT * FROM listings WHERE id=?',
            [id],
        );
        const listing = results[0];
        if (!listing) throw Boom.notFound(`Listing does not exit with id ${id}`);
        return listing;
    }
}