import React from 'react'

import StepList from '../StepList'
import Typography from '../Typography'
import type { IStep } from '../../models'

const steps: IStep[] = [
  {
    key: "1",
    text: "Создать аккаунт"
  },
  {
    key: "2",
    text: "Заполнить страницу"
  },
]

const Welcome: React.FC = () => {
  return (
    <div>
      <Typography
        variant='h4'
        fontWeight={700}
        color="white"
      >
        Начни новую жизнь!
      </Typography>
      <Typography
        variant='body2'
        color="white"
        style={{ marginBottom: 20 }}
      >
        Веб приложение социальная сеть для развивающихся людей. Первый шаг к улучшению вашей жизни. Проект поможет вам начать новую жизнь. Некоммерческий проект.
      </Typography>
      <StepList
        items={steps}
      />
    </div>
  )
}

export default Welcome