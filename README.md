# Bangle-HR — Monitoreo biométrico con wearables

Dashboard en **Node-RED** para visualizar la frecuencia cardíaca de múltiples relojes **Bangle.js 2** en tiempo real, recibiendo datos vía **MQTT**.

## Stack

- Node-RED (flows + Dashboard UI)
- MQTT (broker Mosquitto)
- Bangle.js 2 (wearables)
- Bluetooth Low Energy (BLE)

## Arquitectura

```
Bangle.js 2  →  BLE  →  Python  →  MQTT  →  Node-RED Dashboard
```

## Funcionalidades

- Recepción de datos de ritmo cardíaco por tópico MQTT (`bangle/hrm`)
- Separación de señales por dispositivo (bangle1, bangle2, bangle3)
- Gauges en tiempo real con rangos de color por BPM
- Gráficas históricas de frecuencia cardíaca

## Cómo usar

1. Importa el flow `Bangle.js` en Node-RED
2. Configura el broker MQTT (por defecto `test.mosquitto.org`)
3. Asegúrate de que los relojes publiquen en el tópico `bangle/hrm`
4. Abre el Dashboard de Node-RED para ver los gauges

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `Bangle.js` | Flow exportado de Node-RED |

## Autor

**Ángel Jiménez Morales** — [GitHub](https://github.com/angeljim17)
