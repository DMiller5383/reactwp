import WPAPI from 'wpapi';
export const CHANGE_PAGE = 'change_page';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_CATEGORIES = 'fetch_categories';

const wp = new WPAPI({endpoint: 'http://reactwp.loc/wp-json'});

export function fetchPosts(page=1) {
  const result =  wp.posts().perPage(4).page(page).get();
    const action = {
      type: FETCH_POSTS,
      payload: result
    }
    return action;
}

export function fetchCategories() {
  const result = wp.categories().get();
  const action = {
    type: FETCH_CATEGORIES,
    payload: result
  }
  return action;
}
export function changePage(page) {
  const action = {
    type: CHANGE_PAGE,
    payload: page
  }
  return action;
}
