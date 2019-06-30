import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
    
    return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
    
    //Here we did:
    //converted items list to lodash object
    // then applied _.slice(items, startIndex) function to divide items into separate lists
    // then _.take() function
    // and then .value() is used to convert back to normal array
}