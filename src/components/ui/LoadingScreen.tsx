export function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-label="Cargando portfolio">
      <div className="loading-content">
        <img src="/transparent-light.png" alt="" className="loading-logo" />
        <span className="loading-label">Pablo Dev / iniciando</span>
        <span className="loading-line" aria-hidden="true">
          <span />
        </span>
      </div>
    </div>
  );
}
