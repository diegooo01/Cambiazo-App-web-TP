import {createRouter, createWebHistory} from "vue-router";

//Main pages:
import HomeContent from "../home/home-content.component.vue";
import DonationsContent from "../donations/donations-content.component.vue";
import MembershipsContent from "../memberships/memberships-content.component.vue";

//Terms & conditions pages:
import HelpContent from "../terms-conditions/components/help-content.component.vue";
import ContactUsContent from "../terms-conditions/components/contact-us-content.component.vue";
import TermsUseContent from "../terms-conditions/components/terms-use-content.component.vue";
import PrivacyPoliciesContent from "../terms-conditions/components/privacy-policies-content.component.vue";
import LoginContent from "../login/login-content.component.vue";
import RegisterContent from "../register/register-content.component.vue";
import AdminContentComponent from "../admin/admin-content.component.vue";
import CrudUsersComponent from "../admin/components/crud-users.component.vue";
import CrudOngsComponent from "../admin/components/crud-ongs.component.vue";
import CrudMembershipsComponent from "../admin/components/crud-memberships.component.vue";
import CrudCategoriesProductComponent from "../admin/components/crud-categories-product.component.vue";
import CrudCategoriesOngComponent from "../admin/components/crud-categories-ong.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: HomeContent, meta: { title: 'Home' } },
        { path: '/donations', component: DonationsContent, meta: { title: 'Donations' } },
        { path: '/memberships', component: MembershipsContent, meta: { title: 'Memberships' } },
        //Terms & conditions pages:
        { path: '/help', component: HelpContent, meta: { title: 'Help' } },
        { path: '/contact-us', component: ContactUsContent, meta: { title: 'Contact us' } },
        { path: '/terms-use', component: TermsUseContent, meta: { title: 'Terms of Use' } },
        { path: '/privacy-policies', component: PrivacyPoliciesContent, meta: { title: 'Privacy policies' } },
        //Login & register:
        { path: '/log-in', component: LoginContent, meta: { title: 'Log in' } },
        { path: '/register', component: RegisterContent, meta: { title: 'Register' } },
        //Admin:
        { path: '/admin', component: AdminContentComponent, meta: { title: 'Admin' } },
        { path: '/admin/users', component: CrudUsersComponent, meta: { title: 'Crud Users' } },
        { path: '/admin/ongs', component: CrudOngsComponent, meta: { title: 'Crud Ongs' } },
        { path: '/admin/memberships', component: CrudMembershipsComponent, meta: { title: 'Crud Memberships' } },
        { path: '/admin/categories-product', component: CrudCategoriesProductComponent, meta: { title: 'Crud Categories Product' } },
        { path: '/admin/categories-ong', component: CrudCategoriesOngComponent, meta: { title: 'Crud Categories Ong' } },
        { path: '/', redirect: '/home' },
    ],
});

export default router;