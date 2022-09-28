<template>
  <div class="v-h-home pt-16">
    <HeaderComponent @get-data="getData"></HeaderComponent>
    <div class="container mx-auto py-3">
      <div class="flex flex-wrap">
        <ul class="group w-full">
          <div
            class="group-header flex w-full px-4 py-6 items-center justify-between"
          >
            <div class="group-item__id">#</div>
            <div class="group-item__name flex-3">F.I.SH.</div>
            <div class="group-item__number flex-2 text-center">Tel.Raqami</div>
            <div class="group-item__price flex-2 text-center">
              Homiylik summasi
            </div>
            <div class="group-item__money flex-2 text-center">
              Sarflangan summa
            </div>
            <div class="group-item__date flex-2 text-center">Sana</div>
            <div class="group-item__quality flex-2 text-center">Holati</div>
            <div class="group-item__action text-center">Amallar</div>
          </div>
          <li
            class="group-item flex w-full rounded-lg px-4 py-6 items-center justify-between mb-3"
            v-for="sponsor in sponsors"
            :key="sponsor.id"
          >
            <div class="group-item__id">{{ sponsor.id }}</div>
            <div class="group-item__name flex-3 font-semibold">
              {{ sponsor.full_name }}
            </div>
            <div class="group-item__number flex-2 text-center">
              {{ sponsor.phone }}
            </div>
            <div class="group-item__price flex-2 text-center font-semibold">
              {{ String(sponsor.sum) }}
              <span> UZS</span>
            </div>
            <div class="group-item__money flex-2 text-center font-semibold">
              {{ String(sponsor.spent) }}
              <span> UZS</span>
            </div>
            <div class="group-item__date flex-2 text-center">
              {{
                typeof sponsor.created_at === "string"
                  ? sponsor.created_at
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join(".")
                  : sponsor.created_at
              }}
            </div>
            <div
              class="group-item__quality flex-2 text-center"
              :style="{
                color:
                  sponsor.get_status_display == 'Yangi'
                    ? '#5BABF2'
                    : sponsor.get_status_display == 'Moderatsiyada'
                    ? '#FFA445'
                    : sponsor.get_status_display == 'Bekor qilingan'
                    ? '#979797'
                    : sponsor.get_status_display == 'Tasdiqlangan'
                    ? '#00CF83'
                    : '#1D1D1F',
              }"
            >
              {{ sponsor.get_status_display }}
            </div>
            <div class="group-item__action text-center flex justify-center">
              <img src="@/assets/eye_1.svg" alt="" />
            </div>
          </li>
        </ul>

        <div class="footer py-6">
          <div class="footer-view">
            {{
              pageCount +
              " tadan " +
              (page * pages - (pages - 1)) +
              " - " +
              page * pages
            }}
          </div>
          <div class="footer-pagination">
            <span>Ko'rsatish</span>
            <select v-model="pages" @change="selectChange">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <v-pagination
              v-model="page"
              :pages="pagesLength"
              :range-size="1"
              active-color="#FFFFFF"
              @update:modelValue="updateHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginLayout from "@/components/Layouts/LoginLayout.vue";
import axios from "axios";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import HeaderComponent from "../../components/Layouts/HeaderComponent.vue";
//   import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    LoginLayout,
    VPagination,
    HeaderComponent,
  },
})
export default class HomeView extends Vue {
  sponsors: unknown = [];
  page = 1;
  pages = 10;
  pagesLength = 0;
  pageCount = 0;

  updateHandler = () => {
    this.getData();
  };

  selectChange = () => {
    this.getData();
  };

  getData = (searchText = "") => {
    axios
      .get(
        `https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/?search=${searchText}&page=${this.page}&page_size=${this.pages}`
      )
      .then((response: any) => {
        this.sponsors = response.data.results;
        this.pageCount = response.data.count;
        this.pagesLength =
          parseInt(String(response.data.count / this.pages)) + 1;
      });
  };

  mounted() {
    this.getData();
  }
}
</script>

<style lang="scss">
.v-h-home {
  overflow: hidden;
  position: relative;
  background: #f5f5f7;
  width: 100vw;
  min-height: 100vh;

  .group {
    list-style: none;

    &-item {
      background: #ffffff;
      border: 1px solid rgba(46, 91, 255, 0.08);

      div {
        padding: 0 0.4rem;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        flex: 1;

        span {
          color: #b2b7c1;
        }

        &.flex-2 {
          flex: 2;
        }

        &.flex-3 {
          flex: 3;
        }

        &.flex-4 {
          flex: 4;
        }
      }
    }

    &-header {
      div {
        flex: 1;

        &.flex-2 {
          flex: 2;
        }

        &.flex-3 {
          flex: 3;
        }

        &.flex-4 {
          flex: 4;
        }
      }
    }
  }

  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-pagination {
      display: flex;
      align-items: center;

      select {
        margin: 0 0.4rem;
        padding: 0.2rem 0.4rem;
      }
    }
  }
}

.PaginationControl:first-child,
.PaginationControl:last-child {
  display: none;
}
</style>
