import React from "react";
import Product from "../components/product/product";
import { Products } from "../types/products";

const PowderCoating = () => {
  const leftColumn = [
    "Благодаря краске на основе порошка можно добиться высокой антикоррозийной стойкости, особенно это касается металлической поверхности.",
    "Благодаря порошковой краске любая поверхность, даже хрупкая, становится прочной по отношению к ударам.",
    "Подобный вид покраски защищает изделия от воздействия окружающей среды.",
    "Порошковая краска является идеальным способом для защиты и украшения металлических изделий.",
  ];
  const rightColumn = [
    "При использовании порошковой краски нет нужды в грунтовке поверхности",
    "Порошковая краска в отличие от обычной – это всегда экологически чистое производство",
    "Окрашиваемый материал широко применим, что приводит к его высокому уровню использования",
    "Работа по порошковой окраске стоит намного меньше, чем другими красками",
  ];
  const description = [
    "Порошковая краска — это тип покрытия, наносимый в виде сухого порошка. Покрытие получается более твёрдым, прочным, износостойким, чем обычное ЛКП.",
    "Наши технологии позволяют красить таким способом материалы, такие как металл, пластмассы, композиты, углеродное волокно, МДФ.",
  ];
  return (
    <Product
      header="Вакуумная металлизация"
      description={description}
      leftColumn={leftColumn}
      rightColumn={rightColumn}
      type={Products.POWDER_COATING}
    />
  );
};

export default PowderCoating;
