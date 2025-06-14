 (async () => {
    try {
      const response = await fetch("https://localhost:7256/api/Usuario/sesion-activa", {
        credentials: "include"
      });

      if (!response.ok) {
        // No hay sesión activa
        window.location.href = "index.html";
        return;
      }

      const data = await response.json();
      if (!data || data.rol !== "Administrador") {
        // No es administrador
        alert("Acceso restringido solo para administradores");
        window.location.href = "index.html";
      }
    } catch (error) {
      // Error de red u otro
      console.error("Error validando sesión:", error);
      window.location.href = "index.html";
    }
  })();