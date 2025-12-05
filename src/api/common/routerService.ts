// routerService.ts

let routerInstance: any = null;

// 用于在组件中初始化 router 实例
export const setRouterInstance = (router: any) => {
  routerInstance = router;
};

// 获取 router 实例
export const getRouterInstance = () => {
  return routerInstance;
};
