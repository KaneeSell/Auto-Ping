import chalk from "chalk";
import axios from "axios";
import "dotenv/config";

const minutos = Number(process.env.TEMP_PING_MIN) || 10; // Tempo Default 10min -> configurar no .env
const urlApi = process.env.URL_API || ""; // Sem URL Default -> Configurar no .env

const calcTemp = (temp: number) => temp * 60000;

async function execultarPing() {
  if (urlApi === "") return console.log(chalk.red("Sem urlApi..."));
  const timeStart = Date.now();
  const res = await axios.post(urlApi);
  const timeEnd = Date.now();
  const resTime = timeEnd - timeStart;
  console.log(
    `${chalk.blue(
      `Alvo: { name: ${urlApi}, hora: ${new Date().toLocaleTimeString()} }`
    )}`
  );
  if (res.status !== 200) {
    return console.log(
      `${chalk.green("Ping:")} ${chalk.yellow("{")} ${chalk.blue("Ativo?:")} ${
        res.status === 200 || res.status === 201
          ? chalk.green("Sim")
          : chalk.red("Não")
      }, ${chalk.blue("Tempo:")} ${chalk.green(`${resTime}ms`)}, ${chalk.blue(
        "Data e Hora:"
      )} ${chalk.green(
        new Date().toLocaleDateString() +
          " - " +
          new Date().toLocaleTimeString()
      )} ${chalk.yellow("}")}`
    );
  } else {
    return console.log(chalk.red("Ping Falhou..."));
  }
}
console.log(chalk.bold.green("-- [ AUTO-PING ] --\n"));
console.log(chalk.blue("Iniciando..."));
console.log(chalk.black.bgWhite(`[ Ping a cada ${minutos}min ]`));
execultarPing();

setInterval(() => {
  execultarPing();
}, calcTemp(minutos));
