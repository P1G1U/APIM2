export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
         path: 'upload',
         component: UploadComponent
    },
    {
            path: 'issues',
            component: IssueComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
