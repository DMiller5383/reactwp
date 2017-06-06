export const CHANGE_PAGE = 'change_page';

export function changePage(activePage) {
  return {
    type: CHANGE_PAGE,
    payload: activePage
  }
}
