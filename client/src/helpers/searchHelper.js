

export const searchAdminbyNameOrId = (searchText, data) => {
    const filterSearchedDataByNameOrId = data?.filter(d => d?.title?.toLowerCase()?.includes(searchText?.toLowerCase()) || d?._id == searchText)
    return filterSearchedDataByNameOrId
}