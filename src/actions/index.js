import WPAPI from 'wpapi';
export const CHANGE_PAGE = 'change_page';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_CATEGORIES = 'fetch_categories';
export const SET_ACTIVE_CATEGORY = 'set_active_category';
export const GET_POST = 'get_post';

const wp = new WPAPI({endpoint: 'http://reactwp.loc/wp-json'});

export function fetchPosts(args) {
  const result =  wp.posts().perPage(4).categories(args.category).page(args.page).get();
    const action = {
      type: FETCH_POSTS,
      payload: result
    }
    return action;
}

export function fetchCategories() {
  const result = wp.categories().get()
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


export function setActiveCategory(category_id) {
  const action = {
    type: SET_ACTIVE_CATEGORY,
    payload: category_id
  }
  return action;
}

export function getPost(slug) {
  const result = wp.posts().slug('id-velit-sit-quibusdam-facilis').get();
    const action = {
      type: GET_POST,
      payload: result
    }
    return action;
}
