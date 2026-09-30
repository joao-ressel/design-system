// packages/eslint-config/eslint.config.js
import { FlatCompat } from "@eslint/eslintrc"; // 1. Importar FlatCompat
import path from "path";
import { fileURLToPath } from "url";

// Obter o __dirname para que o FlatCompat encontre os plugins
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inicializar o FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname,
  // Adicione outras opções conforme necessário
});

export default [
  // 2. Usar o compat.extends para carregar a configuração antiga
  ...compat.extends("@rocketseat/eslint-config/react"),

  // 3. Adicionar uma configuração explícita para os seus arquivos (correção do erro anterior)
  {
    files: ["**/*.ts", "**/*.tsx"],
    // Adicione aqui quaisquer configurações específicas que não vieram do pacote.
  },
];
