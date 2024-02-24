function switchLanguage(lang) {
    const title = document.getElementById('header-h');
    const importantz = document.getElementById('importantz-command');
    const clear = document.getElementById('clear-command');
    const craft = document.getElementById('craft-command');
    const day = document.getElementById('day-command');
    const sethome = document.getElementById('sethome-command');
    const delhome = document.getElementById('delhome-command');
    const delwarp = document.getElementById('delwarp-command');
    const home = document.getElementById('home-command');
    const ec = document.getElementById("enderchest-command");
    const feed = document.getElementById("feed-command");
    const fly = document.getElementById("fly-command");
    const flyspeed = document.getElementById("flyspeed-command");
    const gm = document.getElementById("gm-command");
    const heal = document.getElementById("heal-command");
    const invsee = document.getElementById("invsee-command");
    const lightning = document.getElementById("lightning-command");
    const near = document.getElementById("near-command");
    const nick = document.getElementById("nick-command");
    const night = document.getElementById("night-command");
    const realname = document.getElementById("realname-command");
    const repair = document.getElementById("repair-command");
    const setspawn = document.getElementById("setspawn-command");
    const setwarp = document.getElementById("setwarp-command");
    const spawn = document.getElementById("spawn-command");
    const speed = document.getElementById("speed-command");
    const tpacancel = document.getElementById("tpacancel-command");
    const tpaccept = document.getElementById("tpaccept-command");
    const tpadeny = document.getElementById("tpadeny-command");
    const tpa = document.getElementById("tpa-command");
    const tp = document.getElementById("tp-command");
    const tphere = document.getElementById("tphere-command");
    const vanish = document.getElementById("vanish-command");
    const warp = document.getElementById("warp-command");
    const balance = document.getElementById("balance-command");
    const eco = document.getElementById("eco-command");
    const lng = document.getElementById("lng");
    const join_message = document.getElementById("join-server");
    const quit_message = document.getElementById("quit-server");
    const isFeeding = document.getElementById("is-feeding");
    const dayTime = document.getElementById("day-time");
    const nightTime = document.getElementById("night-time");
    const ChatModify = document.getElementById("chat-modify");
    const LocalChatFormat = document.getElementById("local-chat-format");
    const GlobalChatFormat = document.getElementById("global-chat-format");
    const localChatRadius = document.getElementById("local-chat-radius");
    const globalChatPrefix = document.getElementById("global-chat-prefix");
    const addSpacePrefix = document.getElementById("add-space-prefix");
    const msgCmdPrefix = document.getElementById("message-cmd-prefix");
    const bcCmdPrefix = document.getElementById("bc-cmd-prefix");
    const nearRadius = document.getElementById("near-radius");
    const nearMessageFormat = document.getElementById("near-message-format");
    const ecoModule = document.getElementById("eco-module");
    const homesModule = document.getElementById("homes-module");
    const warpsModule = document.getElementById("warps-module");
    const spawnModule = document.getElementById("spawn-module");
    const bc = document.getElementById("broadcast-command");
    const msg = document.getElementById("message-command");
    const kill = document.getElementById("kill-command");
    const list = document.getElementById("list-command");
    const burn = document.getElementById("burn-command");
    const ext = document.getElementById("ext-command");

    switch (lang) {
        case 'en':
            title.textContent = 'Documentation';
            importantz.textContent = '/importantz - Main Plugin`s command';
            balance.textContent = 'Checks Player`s balance';
            clear.textContent = '/clear - Clear Player`s inventory'
            craft.textContent = '/craft - Opens virtual crafting table'
            day.textContent = '/day - Setts day in world'
            delhome.textContent = '/delhome - Deletes a home point for the player'
            delwarp.textContent = '/delwarp - Deletes a warp'
            ec.textContent = '/enderchest - Opens Player`s ender chest';
            eco.textContent = '/eco - Transactions using the Vault Economy';
            feed.textContent = '/feed - Feeds the player';
            fly.textContent = '/fly - Enable/Disable fly mode';
            flyspeed.textContent = '/flyspeed - Setts fly speed';
            gm.textContent = '/gm - Changes Player`s game mode';
            heal.textContent = '/heal - Heals Player';
            home.textContent = '/home - Teleports the player to a point at home'
            invsee.textContent = '/invsee - View Player`s inventory';
            lightning.textContent = '/lightning - To strike with lightning';
            near.textContent = '/near - View the list of players nearby';
            nick.textContent = '/nick - Changes Player`s nick';
            night.textContent = '/night - Setts night in world';
            realname.textContent = '/realname - View real Player`s name';
            repair.textContent = '/repair - Repairs item in Player`s hand';
            sethome.textContent = '/sethome - Creates a home point for the player'
            setspawn.textContent = '/setspawn - Creates a spawn point';
            setwarp.textContent = '/setwarp - Creates a warp';
            spawn.textContent = '/spawn - Teleports the player to a spawn point';
            speed.textContent = '/speed - Setts walk speed for Player';
            tpacancel.textContent = 'tpacancel - Cancels all not accepted teleportation requests';
            tpaccept.textContent = '/tpaccept - Accepts a teleportation request'
            tpadeny.textContent = '/tpadeny - Rejects teleportation request';
            tpa.textContent = '/tpa - Sends a teleportation request'
            tp.textContent = '/tp - Teleport to Player'
            tphere.textContent = '/tphere - Teleport Player to yourself'
            vanish.textContent = '/vanish - Makes Player invisible';
            warp.textContent = '/warp - Teleports Player to warp';
            lng.textContent = 'language - parameter for changing the plugin language';
            join_message.textContent = 'join-server - changes the message when the player join on the server, if the value is "--null", then the message will not be displayed';
            quit_message.textContent = 'quit-server - changes the message when the player quit from the server, if the value is "--null", then the message will not be displayed';
            isFeeding.textContent = 'isFeeding - will the player be feed when executing the heal command';
            dayTime.textContent = 'dayTime - the value for the time of day';
            nightTime.textContent = 'nightTime - the value for the time of night';
            ChatModify.textContent = 'ChatModify - permission to change the chat';
            LocalChatFormat.textContent = 'LocalChatFormat - format of Local Chat';
            GlobalChatFormat.textContent = 'GlobalChatFormat - format of Global Chat';
            localChatRadius.textContent = 'LocalChatRadius - local chat will be active for several blocks';
            globalChatPrefix.textContent = 'GlobalChatPrefix - the character that must be entered at the beginning of the message to send the message to the global chat';
            addSpacePrefix.textContent = 'AddSpacePrefix - adding a space between the prefix in the chat and the player\'s nickname';
            msgCmdPrefix.textContent = 'message:msg-command-prefix - prefix for msg command';
            bcCmdPrefix.textContent = 'broadcast:bc-command-prefix - prefix for bc command';
            nearRadius.textContent = 'near:radius - the near command will be active for several blocks';
            nearMessageFormat.textContent = 'near:message-format - the message format for the near command';
            ecoModule.textContent = 'economy - economy module enable';
            homesModule.textContent = 'homes - homes module enable';
            warpsModule.textContent = 'warps - warps module enable';
            spawnModule.textContent = 'spawn - spawn module enable';
            bc.textContent = '/broadcast - Sends a message to all players on the server';
            msg.textContent = '/message - Sends a message to player'
            list.textContent = '/list - View all players on the server';
            kill.textContent = '/kill - Kills players';
            burn.textContent = '/burn - Sets the Player on fire';
            ext.textContent = '/ext - Extinguishes Player';
            break;
        case 'ru':
            title.textContent = 'Документация';
            importantz.textContent = '/importantz - Главная команда плагина'
            balance.textContent = '/balance - Проверяет баланс игрока';
            clear.textContent = '/clear - Очищает инвентарь игрока'
            craft.textContent = '/craft - Открывает виртуальный верстак'
            day.textContent = '/day - Устанавливает день в мире'
            delhome.textContent = '/delhome - Удаляет точку дома для игрока'
            delwarp.textContent = '/delwarp - Удаляет варп'
            ec.textContent = '/enderchest - Открывает эндер-сундук игрока';
            eco.textContent = '/eco - Транзакции с использованием экономики Vault';
            feed.textContent = '/feed - Кормит игрока';
            fly.textContent = '/fly - Включить/Выключить режим полета';
            flyspeed.textContent = '/flyspeed - Устанавливает скорость полета';
            gm.textContent = '/gm - Изменяет режим игры игрока';
            heal.textContent = '/heal - Лечит игрока';
            home.textContent = '/home - Телепортирует игрока в точку дома'
            invsee.textContent = '/invsee - Посмотреть инвентарь игрока'
            lightning.textContent = '/lightning - Ударить молнией'
            near.textContent = '/near - Посмотреть список игроков, находящихся рядом';
            nick.textContent = '/nick - Изменяет ник игрока';
            night.textContent = '/night - Устанавливает ночь в мире';
            realname.textContent = '/realname - Посмотреть настоящее имя игрока';
            repair.textContent = '/repair - Восстанавливает предмет в руке игрока';
            sethome.textContent = '/sethome - Создает точку дома для игрока'
            setspawn.textContent = '/setspawn - Создает точку спавна'
            setwarp.textContent = '/setwarp - Создает варп';
            spawn.textContent = '/spawn - Телепортирует игрока к точке спавна';
            speed.textContent = '/speed - Устанавливает скорость для игрока';
            tpacancel.textContent = '/tpacancel - Отменяет все непринятые запросы на телепортацию';
            tpaccept.textContent = '/tpaccept - Принимает запрос на телепортацию';
            tpadeny.textContent = '/tpadeny - Отклоняет запрос на телепортацию';
            tpa.textContent = '/tpa - Отправляет запрос на телепортацию';
            tp.textContent = '/tp - Телепортироваться к игроку';
            tphere.textContent = '/tphere - Телепортировать игрока к себе';
            vanish.textContent = '/vanish - Делает игрока невидимым';
            warp.textContent = '/warp - Телепортирует игрока на варп';
            lng.textContent = 'language - Параметр для изменения языка плагина';
            join_message.textContent = 'join_message - изменяет сообщение, когда игрок присоединяется к серверу, если значение равно "--null", то сообщение отображаться не будет';
            quit_message.textContent = 'quit_message - изменяет сообщение, когда игрок выходит с сервера, если значение равно "--null", то сообщение отображаться не будет';
            isFeeding.textContent = 'isFeeding - будет ли игрок накормлен при использовании команды исцеления';
            dayTime.textContent = 'dayTime - значение для времени дня';
            nightTime.textContent = 'dayTime - значение для времени ночи';
            ChatModify.textContent = 'ChatModify - разрешение для изменения чата';
            LocalChatFormat.textContent = 'LocalChatFormat - формат локального чата';
            GlobalChatFormat.textContent = 'GlobalChatFormat - формат глобального чата';
            localChatRadius.textContent = 'LocalChatRadius - локальный чат будет виден в этом значении блоков';
            globalChatPrefix.textContent = 'GlobalChatPrefix - символ, который необходимо ввести в начале сообщения, чтобы отправить сообщение в глобальный чат';
            addSpacePrefix.textContent = 'AddSpacePrefix - добавление пробела между префиксом в чате и ником игрока';
            msgCmdPrefix.textContent = 'message:msg-command-prefix - префикс для команды msg';
            bcCmdPrefix.textContent = 'broadcast:bc-command-prefix - префикс для команды bc';
            nearRadius.textContent = 'near:radius - в скольки блоках будет активна команда near';
            nearMessageFormat.textContent = 'near:message-format - формат сообщения для команды near';
            ecoModule.textContent = 'economy - включает модуль экономики';
            homesModule.textContent = 'homes - включает модуль точек домов';
            warpsModule.textContent = 'warps - включает модуль варпов';
            spawnModule.textContent = 'spawn - включает модуль точки спавна';
            bc.textContent = '/broadcast - Отправляет сообщение всем игрокам на сервере';
            msg.textContent = '/message - Отправляет сообщение игроку'
            list.textContent = '/list - Показывает всех игроков сервера';
            kill.textContent = '/kill - Убивает игрока';
            burn.textContent = '/burn - Поджигает игрока';
            ext.textContent = '/ext - Тушит игрока';
            break;
        default:
            break;
    }
}