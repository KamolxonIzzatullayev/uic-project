import axios from 'axios';
import { defineStore } from 'pinia'

export default defineStore({
  id: '',
  state: () => ({
    sponsors: [],
    pageCount: 0,
    pagesLength: 0,
  }),
  getters: {
    getSponsors: (state) => state.sponsors,
    getPageCount: (state) => state.pageCount,
    getPageLength: (state) => state.pagesLength,
  },
  actions: {
    getToken(state: { sponsors: any; pageCount: number; pagesLength: number; }, searchText: string, page: number, pages: number) {
      axios
        .get(
          `https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/?search=${searchText}&page=${page}&page_size=${pages}`
        )
        .then((response: any) => {
          state.sponsors = response.data.results;
          state.pageCount = response.data.count;
          state.pagesLength =
            parseInt(String(response.data.count / pages)) + 1;
        });
    }
  }
})
