# Variáveis para armazenar informações sobre o commit
message="Commit automático"

# Adicionar todos os arquivos à área de stage
git add .

# Fazer o commit com a mensagem especificada
git commit -m "$message"

# Enviar as alterações para o repositório remoto
git push origin desenvolvimento
