# Étape de build
FROM rust:1.86 as builder
WORKDIR /app

# Copier le code
COPY . .

# Construire le projet
RUN cargo build --release

# Étape d'exécution
FROM debian:buster-slim
WORKDIR /app

# Installer les certificats nécessaires à l'exécution aussi
RUN apt-get update && apt-get install -y \
    ca-certificates \
    && update-ca-certificates

# Copier le binaire
COPY --from=builder /app/target/release/crypto-api .

EXPOSE 8080
CMD ["./crypto-api"]
