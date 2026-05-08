const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [require("../image-targets/image-targets")],
  });
  XR8.addCameraPipelineModule(LandingPage.pipelineModule());
};
window.XR8 ? onxrloaded() : window.addEventListener("xrloaded", onxrloaded);
