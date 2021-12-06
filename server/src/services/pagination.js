const ITEM_PER_PAGE =  3;
const PAGE_NUMBER =  1



function Pagination (pageNumber){
     const limit = ITEM_PER_PAGE;
     const page = Math.abs(pageNumber) || PAGE_NUMBER;
    
     const skip = (page - 1) * ITEM_PER_PAGE;
    return{
        skip,
        limit,
        page
    }
}


module.exports = {
    Pagination,
}