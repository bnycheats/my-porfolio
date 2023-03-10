export const nanoId = (prefix: string = "lr_") =>
  `${prefix}-${Date.now()}-${Math.floor(Math.random() * 9999999999)}`;
