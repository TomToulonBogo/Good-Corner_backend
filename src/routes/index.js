import { addViewToListingRoute } from "./addViewToListing";
import { getAllListingsRoute } from "./getAllListings";
import { deleteListingRoute } from "./deleteListing";
import { getListingRoute } from "./getListing";
import { createNewListingRoute } from "./createNewListing";
import { getUserListingsRoute } from "./getUserListings";
import { updatedListingRoute } from "./updateListing";

export default [
    deleteListingRoute,
    updatedListingRoute,
    createNewListingRoute,
    addViewToListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute,
];