import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { HistoryContainer, HistoryList, Status } from './History.styles'
import { CyclesContext } from '../../contexts/CycleContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles &&
              cycles.length > 0 &&
              cycles.map((cycles) => {
                return (
                  <tr key={cycles.id}>
                    <td>{cycles.task}</td>
                    <td>{cycles.minutesAmount} minutos</td>
                    <td>
                      {formatDistanceToNow(new Date(cycles.startDate), {
                        addSuffix: true,
                        locale: ptBR,
                        includeSeconds: true,
                      })}
                    </td>
                    <td>
                      {cycles.finishedate && (
                        <Status statusColor="green">Concluído</Status>
                      )}
                      {cycles.interruptDate && (
                        <Status statusColor="red">Interrompido</Status>
                      )}
                      {!cycles.finishedate && !cycles.interruptDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
